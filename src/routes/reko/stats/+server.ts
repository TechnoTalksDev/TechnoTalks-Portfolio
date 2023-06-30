import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Long, MongoClient, ObjectId } from 'mongodb';

const uri = import.meta.env.VITE_URI

export const GET = (async ({ url }) => {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to DB")

        const coll = await client.db("reko").collection("botstats")
        const data = await coll.findOne({_id: new ObjectId("649e1588abc43a3dd2ec0d02")})

        var stats = []

        if (data) {
            stats = [{name:"Guilds", value: data.guild_count, label: "servers"}, {name:"Users", value: data.users, label: "members"}, {name:"Commands", value: data.commands_run, label: "run"}]
        }else {
            console.log("faled to retrieve bot stats")
            stats = [{name:"Guilds", value: null, label: "servers"}, {name:"Users", value: null, label: "members"}, {name:"Commands", value: null, label: "run"}] 
        }

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

    return new Response(JSON.stringify(stats));
}) satisfies RequestHandler;