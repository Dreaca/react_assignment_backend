import {PrismaClient} from "@prisma/client";
import Customer from "../models/Customer";

const prisma = new PrismaClient()

//Customer Ops
export async function CustomerAdd(c:Customer){
    try{
        const newCustomer =  await prisma.customer.create({
            data:{
                id:c.id,
                name:c.name,
                address:c.address,
                phone:c.phone,
            }
        })
        console.log("Customer added successfully.")
    }
    catch(err){
        console.log(err)
    }
}
export async function CustomerDelete(id:String){
    try {
        await prisma.customer.delete({
            where: {
                id: String(id)
            }
        });
        console.log("Customer deleted successfully.")
    }
    catch(err){
        console.log(err)
    }
}
export async function CustomerUpdate(id:String,c:Customer){
    try {
        await prisma.customer.update({
            where: {id:String(id)},
            data:{
                id:String(c.id),
                name:c.name,
                address:c.address,
                phone:c.phone,
            }
        });
        console.log("Customer updated successfully.")

    }catch (err){
        console.log(err)
    }
}
export async function CustomerGetById(id:String){
    try {
        return await prisma.customer.findUnique({
            where: {id: String(id)},

        });
    }catch(err){
        console.log(err)
    }
}
export async function CustomerGetAll(){
    try {
        return await prisma.customer.findMany()
    }
    catch(err){
        console.log(err)
    }
}
