

/*
 * GET /skills
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getSkills = function(req, res) {
	res.set("Content-Type", "application/json");
	res.status(200);

	// set response body and send
	res.render('skills_getSkills');
};

/*
 * POST /skills
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSkills = function(req, res) {
	res.set("Content-Type", "application/json");
	res.status(201);

	// set response body and send
	res.render('skills_postSkills');
};

/*
 * GET /skills/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getSkillsById = function(req, res) {
	res.set("Content-Type", "application/json");
	res.status(200);

	// set response body and send
	res.render('skills_getSkillsById');
};

/*
 * PUT /skills/{id}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putSkills = function(req, res) {
	res.set("Content-Type", "application/json");
	res.status(200);

	// set response body and send
	res.render('skills_putSkills');
};

/*
 * DELETE /skills/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.deleteSkills = function(req, res) {
	res.set("Content-Type", "application/json");
	res.status(204);

	// set response body and send
	res.json({});
};
