const { AuthenticationError } = require('apollo-server-express');
const { User, Clipboard } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  //getters
  Query: {
    users: async () => {
      return User.find().populate('clipboards');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('clipboards');
    },

    //select all clipboards
    clipboards: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Clipboard.find(params)  //.sort({ createdAt: -1 });
    },
    //select specific clipboard if searched
    clipboard: async (parent, { clipboardId }) => {
      return Clipboard.findOne({ _id: clipboardId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('clipboards');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
//setters or updaters
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },                                    //VV, context
    addClipboard: async (parent, { code, topic}) => {
      return await Clipboard.create({topic, code})
      // if (context.user) {
      //   const clipboard = await Clipboard.create({
      //     clipboardText,
      //     clipboardAuthor: context.user.username,
      //   });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { clipboards: clipboard._id } }
        // );

      //   return clipboard;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    removeClipboard: async (parent, { clipboardId }, context) => {
      if (context.user) {
        const clipboard = await Clipboard.findOneAndDelete({
          _id: clipboardId,
          clipboardAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { clipboards: clipboard._id } }
        );

        return clipboard;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
