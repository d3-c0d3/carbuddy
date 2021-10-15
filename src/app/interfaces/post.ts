export interface Post {
    _id?:string;
    title:string;
    slug:string;
    author:string;
    shortDescription: string
    body:string;
    image:string;
    priority: string
    comment:null| [{
        type: string,
        ref: 'Comment'
    }],
}
/* 
const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: false
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {
    timestamps: true,
    versionKey: false
});
 */