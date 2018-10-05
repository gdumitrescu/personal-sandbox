/*
 * GET /skills
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getSkills = function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the Content-Type header.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(
        [
            { "id": 1, "name": "HTML" },
            { "id": 2, "name": "CSS"},
            { "id": 3, "name": "JavaScript" }
        ]
    );
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
