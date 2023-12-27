import Student from '../models/Student.js';


const updateDocumentByID = async () => {

    // const result =await Student.findByIdAndUpdate('658ae8468b8454f46edd90cb', {name : 'Updated user'}) // will return an old user
    // const result = await Student.findByIdAndUpdate('658ae8468b8454f46edd90cb', { name: 'Updated user 2' }, { returnDocument: 'after' }) // will return a new user

    console.log(result)

}

const updateOneDocument = async () => {

    // const result = await Student.updateOne({_id:'658ae8468b8454f46edd90cb'},{name:'user reverted'})
    // const result = await Student.updateOne({_id:'658ae8468b8454f46edd90c0'},{name:'user reverted'},{upsert:true})

    console.log(result)
}

const updateManyDocument = async () => {

    // const result = await Student.updateMany({ age: 25 }, { age: 26 })
    const result = await Student.updateMany({ age: 28 }, { age: 30 }, { upsert: true })

    console.log(result)
}

export { updateDocumentByID, updateOneDocument, updateManyDocument }
