const categoryModel=require('../Models/Category_Model');


//create a category
async function addCategory(req,res) {
    try{
        const body=req.body;
        // if(!body.name||!body.description||!body.createdAt)
        // {
        //     res.status(400).json({ message: "please fill all field.." });
        // }
        
        await categoryModel.create({
        name:body.name,
        description:body.description,
        createdAt:body.createdAt,
        })
        res.status(201).json({ message: "user Created.." });
    }   
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "error occured.." });
      }
}


//get all Category
async function getAllCategory(req,res){
    try{
        const allCategory=await categoryModel.find({})
        res.status(200).send({
            Category:allCategory.length,
            allCategory,
        })
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "error get in category.." });
      }
}


//get category by id
async function getCategoryBy(params) {
    
}


//update Category by id
async function updateCategory(req,res) {
    try{
        const {id}=req.params;
        // if (!ObjectId.isValid(id)) {
        //     return res.status(400).json({ message: "Invalid category ID format" });
        // }
        const updatedCategory =await categoryModel.findByIdAndUpdate(id, req.body, {new: true});
        const cleanUpdatedCategory=JSON.parse(JSON.stringify(updatedCategory,(key,value)=>{
            if (key === 'client' || key === 'sessionPool') {
                return undefined; // Exclude circular reference properties
            }
            return value;
        }))
        res.status(200).json(cleanUpdatedCategory);

    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "error get in category.." });
      }
}


//Delete Category By Id
async function deleteCategoryById(req, res) {
    try {
      const {id }= req.params;
      const deleteCategory =await categoryModel.findByIdAndDelete(id);
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "error in update Category.." });
    }
  }


module.exports={
    addCategory,
    getAllCategory,
    updateCategory,
    deleteCategoryById,
}