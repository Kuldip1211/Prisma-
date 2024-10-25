import prisma from "../Db/db.config.js";

export const creatUser = async(req,res ) => {
  const {name , email , password } =  req.body 

  const finduser = await prisma.user.findUnique({
   where : {
    email : email
   }
  })

  if(finduser){
   return res.json({status:400, massage : "Email already tacken "})
  }

  const newuser = await prisma.User.create({
   data:{
    name : name,
    email : email,
    password : password,
   }
  })

  res.json({massage : "user created"})
}

// find all user 
export const getAllUsers = async (req, res) => {
 try {
   const users = await prisma.user.findMany();
   res.json({ users });
 } catch (error) {
   res.status(500).json({ message: "Error retrieving users", error });
 }
};

// Update User
export const updateUser = async (req, res) => {
 const { id } = req.params;
 const { name, email, password } = req.body;

 try {
   const updatedUser = await prisma.user.update({
     where: { id: parseInt(id) },
     data: {
       name,
       email,
       password,
     },
   });
   res.json({ message: "User updated", user: updatedUser });
 } catch (error) {
   res.status(404).json({ message: "User not found or error updating user", error });
 }
};

export const deleteUser = async (req, res) => {
 const { id } = req.params;

 try {
   await prisma.user.delete({
     where: { id: parseInt(id) },
   });
   res.json({ message: "User deleted" });
 } catch (error) {
   res.status(404).json({ message: "User not found or error deleting user", error });
 }
};