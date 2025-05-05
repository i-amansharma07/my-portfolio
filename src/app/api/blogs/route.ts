import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../../lib/prisma";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient()

export async function GET(request : NextRequest){

    const blogs = await prisma.blog.findMany();

    console.log(blogs);
    

    console.log("called.....................................");
    

    const searchParams = request.nextUrl.searchParams;
    const blogId = searchParams.get("blog_id")

    return NextResponse.json({
        blog : blogs[0]
    })

} 

//$harmaKakashi07
//postgresql://postgres:[YOUR-PASSWORD]@db.xqaddhprscjdlfybqjhh.supabase.co:5432/postgres