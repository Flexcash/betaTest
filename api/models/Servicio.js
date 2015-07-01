/**
* Servicio.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 tableName: 'servicio',
  // meta: {
  //    schemaName: 'test'
  // },
  connection: 'somePostgresqlServer',
  autoCreatedAt: false,
  // autoUpdatedAt: false,
  attributes: {
    id: {
        type: 'integer',
        columnName : 'idservicio'
    },    
    nombre: {
        type: 'string',
        required : true
    },        
    estado: {
        type: 'integer',
        required : true
    }
  }
};

