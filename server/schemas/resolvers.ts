import { get } from 'mongoose';
import { Couch, User, Post } from '../models/index';

const resolvers = {
    Query: {
        getCouches: async () => {
            try {
                return await Couch.find();
            } catch (error) {
                console.error(error);
            }
        },
        getCouch: async (_, { _id }) => {
            try {
                return await Couch.findById(_id);
            } catch (error) {
                console.error(error);
            }
        },
        getUsers: async () => {
            try {
                return await User.find();
            } catch (error) {
                console.error(error);
            }
        },
        getUser: async (_, { _id }) => {
            try {
                return await User.findById(_, { _id });
            } catch (error) {
                console.error(error);
            }
        },
        getPosts: async () => {
            try {
                return await Post.find();
            } catch (error) {
                console.error(error);
            }
        },
        getPost: async (_, { _id }) => {
            try {
                return await Post.findById(_, { _id });
            } catch (error) {
                console.error(error);
            }
        },
    },
};

export default resolvers;