// contoh mock data, nanti dari database
const users = [
	{ name: 'billy', age: 21 },
	{ name: 'kevin', age: 31 }
]
// ------------------------------------

module.exports.user = async (event) => {
	if (event.httpMethod.toLowerCase() === 'get') {
		return {
			statusCode: 200,
			body: JSON.stringify(users)
		}
	} else if (event.httpMethod.toLowerCase() === 'post') {
		if (event.body) {
			let user = JSON.parse(event.body);
			if (users.push(user) === 1) {
				return {
					statusCode: 200,
					body: "Success"
				}
			} else {
				return {
					statusCode: 502,
					body: "InternalServerError"
				}
			}
		} else {
			return {
				statusCode: 400, body: JSON.stringify({
					message: 'Bad Request'
				})
			}
		}
	} else {
		return {
			statusCode: 404,
			body: 'NotFound'
		}
	}

}