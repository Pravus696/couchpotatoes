var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Couch, User, Post } from '../models/index';
const resolvers = {
    Query: {
        getCouches: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield Couch.find();
            }
            catch (error) {
                console.error(error);
            }
        }),
        getCouch: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { _id }) {
            try {
                return yield Couch.findById(_id);
            }
            catch (error) {
                console.error(error);
            }
        }),
        getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield User.find();
            }
            catch (error) {
                console.error(error);
            }
        }),
        getUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { _id }) {
            try {
                return yield User.findById(_, { _id });
            }
            catch (error) {
                console.error(error);
            }
        }),
        getPosts: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield Post.find();
            }
            catch (error) {
                console.error(error);
            }
        }),
        getPost: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { _id }) {
            try {
                return yield Post.findById(_, { _id });
            }
            catch (error) {
                console.error(error);
            }
        }),
    },
};
export default resolvers;
