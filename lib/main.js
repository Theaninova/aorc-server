"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = exports.multiplayer = exports.users = exports.io = void 0;
const socket_io_1 = require("socket.io");
const controllers_1 = require("./controllers");
const users_1 = require("./users");
const multiplayer_1 = require("./multiplayer");
const port = Number(process.env.PORT) || 4593;
exports.io = new socket_io_1.Server({
    cors: {
        origin: '*',
    },
});
exports.users = exports.io.of('users');
exports.multiplayer = exports.io.of('multiplayer');
exports.controllers = exports.io.of('controllers');
(0, controllers_1.configureControllers)();
(0, users_1.configureUsers)();
(0, multiplayer_1.configureMultiplayer)();
exports.io.listen(port);
console.log(`Server is running on port ${port}`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.io.engine.on('connection_error', (error) => {
    console.log(error.req); // the request object
    console.log(error.code); // the error code, for example 1
    console.log(error.message); // the error message, for example "Session ID unknown"
    console.log(error.context); // some additional error context
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFnQztBQUNoQywrQ0FBa0Q7QUFDbEQsbUNBQXNDO0FBQ3RDLCtDQUFrRDtBQUVsRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUE7QUFDaEMsUUFBQSxFQUFFLEdBQUcsSUFBSSxrQkFBTSxDQUFDO0lBQzNCLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxHQUFHO0tBQ1o7Q0FDRixDQUFDLENBQUE7QUFDVyxRQUFBLEtBQUssR0FBRyxVQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3RCLFFBQUEsV0FBVyxHQUFHLFVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbEMsUUFBQSxXQUFXLEdBQUcsVUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUMvQyxJQUFBLGtDQUFvQixHQUFFLENBQUE7QUFDdEIsSUFBQSxzQkFBYyxHQUFFLENBQUE7QUFDaEIsSUFBQSxrQ0FBb0IsR0FBRSxDQUFBO0FBRXRCLFVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBRWhELDhEQUE4RDtBQUM5RCxVQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMscUJBQXFCO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsZ0NBQWdDO0lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsc0RBQXNEO0lBQ2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsZ0NBQWdDO0FBQzdELENBQUMsQ0FBQyxDQUFBIn0=