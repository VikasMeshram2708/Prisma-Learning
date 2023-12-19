import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    // await prisma.user.create({
    //     data: {
    //         name: "test1",
    //         email: "test1@example.com",
    //         password: "test1"
    //     }
    // })

    // await prisma.user.update({
    //     where: {
    //         email:"test1@example.com"
    //     },
    //     data: {
    //         email: "updatedTest1@example.com",
    //     }
    // })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}


main().catch(async (e) => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})