import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, { timestamps: true}
})

export const Todo = mongoose.model('Todo', todoSchema)

// content is what type of content will be there which is want string and it is a required field so true

// we also want a checlbox for whether it is completed or not, so we are using boolean type, and by default it will be marked unchecked

// in createdBy we are refrencing and connecting User.js which is a schema, so this is 'type: mongoose.Schema.Types.ObjectId' constant by syntax, and ref: "User" we are referring to this data model.

// Interview question:
// in mongo is this 'Todo' remains same? 
// NO, it changes to 'todos'
// if it was 'User' it changes to 'users'

//what is timestamps?
// in mongo we often need to know at what time it was created, it was last updated so with this we can use methods createdAt, updatedAt


