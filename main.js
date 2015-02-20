/*
 * Personal API v1
 *
 * http://personal.getsandbox.com
 */
var skills = require("./routes/skills.js");

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/skills", "GET", skills.getSkills);
Sandbox.define("/skills", "POST", skills.postSkills);
Sandbox.define("/skills/{id}", "GET", skills.getSkillsById);
Sandbox.define("/skills/{id}", "PUT", skills.putSkills);
Sandbox.define("/skills/{id}", "DELETE", skills.deleteSkills);
