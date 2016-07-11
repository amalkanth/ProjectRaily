/**
 * Raily is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var AlexaSkill = require('./AlexaSkill');

var Raily = function () {
    AlexaSkill.call(this, APP_ID);
};
// Extend AlexaSkill
Raily.prototype = Object.create(AlexaSkill.prototype);
Raily.prototype.constructor = Raily;


var intentHandlers = require('./handlers/intentHandlers');
var eventHandlers = require('./handlers/eventHandlers');


module.exports = Raily;