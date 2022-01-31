"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = exports.users = exports.io = void 0;
const socket_io_1 = require("socket.io");
const controllers_1 = require("./controllers");
const users_1 = require("./users");
const port = Number(process.env.PORT) || 4593;
exports.io = new socket_io_1.Server({
    cors: {
        origin: '*',
    },
});
exports.users = exports.io.of('users');
exports.controllers = exports.io.of('controllers');
(0, controllers_1.configureControllers)();
(0, users_1.configureUsers)();
exports.io.listen(port);
console.log(`Server is running on port ${port}`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.io.engine.on('connection_error', (error) => {
    console.log(error.req); // the request object
    console.log(error.code); // the error code, for example 1
    console.log(error.message); // the error message, for example "Session ID unknown"
    console.log(error.context); // some additional error context
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFnQztBQUNoQywrQ0FBa0Q7QUFDbEQsbUNBQXNDO0FBRXRDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQTtBQUNoQyxRQUFBLEVBQUUsR0FBRyxJQUFJLGtCQUFNLENBQUM7SUFDM0IsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEdBQUc7S0FDWjtDQUNGLENBQUMsQ0FBQTtBQUNXLFFBQUEsS0FBSyxHQUFHLFVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDdEIsUUFBQSxXQUFXLEdBQUcsVUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMvQyxJQUFBLGtDQUFvQixHQUFFLENBQUE7QUFDdEIsSUFBQSxzQkFBYyxHQUFFLENBQUE7QUFFaEIsVUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksRUFBRSxDQUFDLENBQUE7QUFFaEQsOERBQThEO0FBQzlELFVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQyxxQkFBcUI7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxnQ0FBZ0M7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQyxzREFBc0Q7SUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQyxnQ0FBZ0M7QUFDN0QsQ0FBQyxDQUFDLENBQUEifQ==