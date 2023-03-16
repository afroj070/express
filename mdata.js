var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
  });

  employeeSchema.methods.totalSalary=function(){

    console.log('totale income of %s: Rs. %d',this.name, +employees.hourlyrate*employees.totalHour);
  }

  var employeeModal = mongoose.model('employee', employeeSchema);
  var employees = new employeeModal({name: 'tesat',
    email:"firoj.com",
    etype: "test",
    hourlyrate: 10,
    totalHour: 16,
});

// employees.totalSalary();
// employeeModal.findOne().byName('tesat').exec((err, emple) => {
//     console.log(emple);
//   });
// console.log('find results : ',employeeModal.where() );

// employees.save();
conn.on("connected",function(){
  console.log("connected is successfully");
});

conn.on("disconnected",function(){
  console.log("disconnected is successfully");
});


