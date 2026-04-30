import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (!user) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { eventName, eventParams } = await req.json();

        if (!eventName) {
            return Response.json({ error: 'eventName is required' }, { status: 400 });
        }

        const measurementId = Deno.env.get("GTM_MEASUREMENT_ID");
        const apiSecret = Deno.env.get("GTM_API_SECRET");

        if (!measurementId || !apiSecret) {
            return Response.json({ error: 'GTM credentials not configured' }, { status: 500 });
        }

        // Generate a client ID (use user email hash or generate one)
        const clientId = user.id || crypto.randomUUID();

        // Send event to Google Analytics 4 Measurement Protocol
        const gaResponse = await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_id: clientId,
                    user_id: user.email,
                    events: [
                        {
                            name: eventName,
                            params: {
                                ...eventParams,
                                user_email: user.email,
                                timestamp: new Date().toISOString()
                            }
                        }
                    ]
                })
            }
        );

        if (!gaResponse.ok) {
            const errorText = await gaResponse.text();
            return Response.json({ 
                error: 'Failed to send event to Google Analytics',
                details: errorText 
            }, { status: 500 });
        }

        return Response.json({ 
            success: true, 
            eventName,
            message: 'Event tracked successfully' 
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});