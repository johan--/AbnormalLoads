var insertSystemRoles = function(sysId) {
  db.roles.insert({name: "SysAdmin", systemId: sysId});
  db.roles.insert({name: "Admin", systemId: sysId});
  db.roles.insert({name: "User", systemId: sysId});
  db.roles.insert({name: "Restricted", systemId: sysId});
}

var createAdminUser = function(userId) {
    var sysId = getSysId();
    var sysAdminRoleId = db.roles.findOne({name: "SysAdmin", systemId: sysId})._id;
    var adminRoleId = db.roles.findOne({name: "Admin", systemId: sysId})._id;
    var userRoleId = db.roles.findOne({name: "User", systemId: sysId})._id;

    var query = {};
    if (userId != null) {
      query = { _id : userId };
    }
    db.users.update(
      query,
      {
      $set: {
        email: "admin@abloads.co.uk"
        , password: "$2a$10$qSsHOWH2K9Ha8cfAcYzpWuk7WEBMIRIwWmMf32hIasLDUOWf5dSXe"
        , firstName: "Admin"
        , lastName: "User"
        , roles: [sysAdminRoleId, adminRoleId, userRoleId]
        , systemId: sysId
        }
      },
      { upsert: true }
    );
}

var initDb = function() {
  print("initDB");
  db.systems.insert({name: "abnormalloads"});
  var sysId = db.systems.findOne({name: "abnormalloads"})._id;

  insertSystemRoles(sysId);

  db.environments.insert({host: "{{server_address}}", name: "{{app_name}} {{app_version}}", systemId: sysId});

  var sysAdminRoleId = db.roles.findOne({name: "SysAdmin", systemId: sysId})._id;
  var adminRoleId = db.roles.findOne({name: "Admin", systemId: sysId})._id;
  var userRoleId = db.roles.findOne({name: "User", systemId: sysId})._id;
  var user = db.users.findOne({email: "admin@abloads.co.uk"});
  var userId = null;
  if (user != null) {
    userId = user._id;
  }

  createAdminUser(userId);

};

var getSysId = function() {
  var id = db.systems.findOne({name: "abnormalloads"})._id;
  return id;
}

var validateEnvironment = function() {
  var sysId = getSysId();
  db.environments.update({host: "{{server_address}}"}, {host: "{{server_address}}", name: "{{app_name}} {{app_env}}", systemId: sysId}, {upsert: true});
}

// establish current database version

var currentVersion = db.versions.findOne();
if (currentVersion === null || currentVersion === undefined) {
  currentVersion = "0.0.0";
} else {
  currentVersion = currentVersion.version;
}

print('current version : ' + currentVersion);
switch (currentVersion)
{
  case "0.0.0":
    initDb();
    db.versions.insert({version: "0.1.0"});
    break;
  case "0.1.0":
    break;
  default:
    console.log('Unknown version - cannot upgrade');
}

validateEnvironment();
