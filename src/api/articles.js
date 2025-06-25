import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import Article from "@/models/Article";

export async function GET(req) {
    try {
        await connectToDB();

        const url = new URL(req.url);
        const limit = parseInt(url.searchParams.get("limit") || "6", 10);

        const articles = await Article.find()
            .sort({ createdAt: -1 })
            .limit(limit);

        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch articles" },
            { status: 500 }
        );
    }
}
