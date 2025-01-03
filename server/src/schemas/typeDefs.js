const typeDefs = `
    type Couch {
        _id: ID!
        name: String
        type: String
        description: String
        material: String
        color: String
        dimensions: Dimensions
        images: [String]
        postedBy: User
        createdAt: String
    }

    type Dimensions {
        length: Int
        width: Int
        height: Int
    }

    type User {
        _id: ID!
        username: String
        email: String
        bio: String
        profilePicture: String
        createdAt: String
    }

    type Post {
        _id: ID!
        type: String
        content: String
        images: [String]
        postedBy: User
        createdAt: String
        likes: [User]
        comments: [Comment]
        squats: [User]
    }
    
    type Comment {
        text: String
        postedBy: User
    }
    
    type Query {
        getCouches: [Couch]
        getCouch(_id: ID!): Couch
        getUsers: [User]
        getUser(_id: ID!): User
        getPosts: [Post]
        getPost(_id: ID!): Post
    }`;
export default typeDefs;
