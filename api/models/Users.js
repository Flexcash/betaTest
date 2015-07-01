var bcrypt = require('bcrypt-nodejs');

module.exports = {
    tableName: 'users',
    connection: 'somePostgresqlServer',
    attributes: {

        id: {
            type: 'integer'
        },
        ip_address: {
            type: 'string'
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },    
        password: {
            type: 'string',
            required: true
        },    
        email: {
            type: 'email',
            required: true,
            unique: true
        },         
        activation_code: {
            type: 'string'
        },                    
        forgotten_password_code: {
            type: 'string'
        }, 
        forgotten_password_time: {
            type: 'integer'
        },       
        remember_code: {
            type: 'string'
        },                  
        last_login: "datetime",
        active: "integer",
        first_name: {
            type: 'string',
            required: true
        },
        last_name: {
            type: 'string',
            required: true
        },   
        company: "string",             
        phone: "string",             
        // created: "datetime",
        // modified: "datetime",       
        //delete from json
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            delete obj.activation_code;
            delete obj.remember_code;
            delete obj.forgotten_password_code;
            delete obj.forgotten_password_time;
            return obj;
        }
    },
    beforeCreate: function(users, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(users.password, salt, null, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    users.password = hash;
                    cb();
                }
            });
        });
    }
};