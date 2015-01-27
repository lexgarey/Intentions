if (Meteor.isClient) {
  Template.body.helpers({
    intentions: function () {
      return Intentions.find({});
    }  
  });
}