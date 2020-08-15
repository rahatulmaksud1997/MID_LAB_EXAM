var db = require('./dbc');

module.exports =
{
	getEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `EmpID` ='"+user.EmpID+"';";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	getEmployeeForRecover: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `EmpID` ='"+user.a+"' AND `E_NAME` ='"+user.b+"';";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(true);
			}
		});
	},

	getAllEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `DID` != '0' ORDER BY `DID`;";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	insertEmployee: function(user, callback)
  {
		var sql = "INSERT INTO `employee`(`EmpID`, `E_NAME`, `DID`) VALUES ('"+user.EmpID+"','"+user.name+"');";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	},

	updateEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `E_NAME`='"+user.name+"', ' WHERE `EmpID`='"+user.EmpID+"';";
		db.execute(sql, function(result)
		{
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	},

	deleteEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `DID`='0' WHERE `EmpID`='"+user.EmpID+"';";
		db.execute(sql, function(result)
		{
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	},

	updateOwnProfileEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `E_NAME`='"+user.Ename+"',' WHERE `EmpID`='"+user.EmpID+"';";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	}
}
