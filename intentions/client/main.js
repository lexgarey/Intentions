if (Meteor.isClient) {
  Template.body.helpers({
    intentions: function () {
      return Intentions.find({}, { $set: {createdAt: -1}});
    }  
  });

  Template.body.events({
    "submit .new-intention": function () {
      // Called when the new intention form is submitted

      var text = event.target.text.value;

      Intentions.insert({
        text: text,
        createdAt: new Date()
      });

      // Clears form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });
}