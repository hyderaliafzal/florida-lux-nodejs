/**
 * @swagger
 * components:
 *   schemas:
 *     Filter:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the property
 *           trim: true
 *           required: true
 *         code:
 *           type: string
 *           description: Code of the property
 *         description:
 *           type: string
 *           description: Description of the property
 *         condominiumOptions:
 *           type: string
 *           description: Condominium Options of the property
 *         photo:
 *           type: string
 *           description: URL of the property's photo
 *         features:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the feature
 *               description:
 *                 type: string
 *                 description: Description of the feature
 *         geo:
 *           type: object
 *           properties:
 *             east:
 *               type: string
 *               description: Eastern coordinate
 *             west:
 *               type: string
 *               description: Western coordinate
 *             north:
 *               type: string
 *               description: Northern coordinate
 *             south:
 *               type: string
 *               description: Southern coordinate
 *
 * paths:
 *   /v1/filter:
 *     post:
 *       summary: Create a new filter.
 *       tags:
 *         - Filters
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filter'
 *       responses:
 *         '201':
 *           description: Successfully created a new filter.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Filter'
 *         '400':
 *           description: Bad request. Invalid input data.
 *         '500':
 *           description: Internal server error.
 *
 *     get:
 *       summary: Retrieve filters based on a provided key or return all agents if no key is given.
 *       parameters:
 *         - in: query
 *           name: key
 *           schema:
 *             type: string
 *           description: Optional. The key to search for agents.
 *         - in: query
 *           name: limit
 *           description: The number of agents to return per page.
 *           schema:
 *             type: integer
 *         - in: query
 *           name: page
 *           description: The page number of results to return.
 *           schema:
 *             type: integer
 *       tags:
 *         - Filters
 *       responses:
 *         '200':
 *           description: A list of filters.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Filter'
 *         '500':
 *           description: Internal server error.
 *
 *   /v1/filter/{id}:
 *     get:
 *       summary: Retrieve a filter by ID.
 *       tags:
 *         - Filters
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the filter to retrieve.
 *       responses:
 *         '200':
 *           description: The filter object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Filter'
 *         '404':
 *           description: Filter not found.
 *         '500':
 *           description: Internal server error.
 *
 *     patch:
 *       summary: Update a filter by ID.
 *       tags:
 *         - Filters
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the filter to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Filter'
 *       responses:
 *         '200':
 *           description: Successfully updated the filter.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Filter'
 *         '400':
 *           description: Bad request. Invalid input data.
 *         '404':
 *           description: Filter not found.
 *         '500':
 *           description: Internal server error.
 *
 *     delete:
 *       summary: Delete a filter by ID.
 *       tags:
 *         - Filters
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The ID of the filter to delete.
 *       responses:
 *         '200':
 *           description: Successfully deleted the filter.
 *         '400':
 *           description: Bad request. Invalid input data.
 *         '404':
 *           description: Filter not found.
 *         '500':
 *           description: Internal server error.
 */
