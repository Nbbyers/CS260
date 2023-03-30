
# Hitch-a-Ride

## A carpooling app that saves you time and money!

Ski canyons are struggling with a huge influx of congestion. Resorts are capitalizing on this by charging for parking. UDOT is working out the details for a $500M gondola. Neither of these "fixes" help the skiers.

Hitch-a-Ride is an app designed to help people link up with other users along their route to and from the mountain. This helps everybody save money on gas and parking, all while taking cars out of the canyon.

## How it works:

Verified drivers submit the drives they will going on with estimated times.

Riders search through drives for one that fits their needs, and then send a request.

Drivers can vet the requests and accept/reject certain riders.

Once a rider is accepted, a message channel will be opened up for them to work out the details.

## Bonus Features:

An SOS feature will be activated once a ride is started. This allows the user (rider or driver) to quickly call out for help if something seems amiss.

Ratings: drivers and riders will each earn a rating to help other users feel more comfortable linking up.

Maps: Once a ride is started, a map with the route is pulled up so the rider can see if they go off course.

## Links:
https://startup.hitcharide.click/

https://www.figma.com/file/8I1N960aXYo3FunwWJNDkg/The-Lift?node-id=0%3A1&t=FPu7DEU6IzlIqE4J-1

http://hitcharide.click/

http://18.188.141.241

ssh -i [pem] ubuntu@18.188.141.241

# Lessons Learned:
## HTML:
It's pretty straightforward.

## CSS:
Bootstrap is a great way to pull in premade css compontents. Link them using classes.
Manually override bootstrap settings in .css file using keyword: !important

## JavaScript:
Data persistence works best with JSON and storing my objects in local storage.
Use event listeners to make buttons easier to manipulate.

## Web Services:
Endpoints accept a request and return a response. Endpoints can call a function that performs certain logic. Best practice is to send data through API and then update the local storage, as well as try to retrieve from API and only grab from local storage if that fails. Node's express server is on higher layer of project code. html and everything else goes in the public folder.

## Database/MongoDB:
Proper technique is to save credentials as environment variables and then call them from the host so we aren't shipping credentials with the code. With mongoDB we can build collections using json and then request items from those collections. EX: const collection = client.db("test").collection("devices");

## Account Authentication:
Services such as google firebase and AWS Cognito provide simple plugins for account authorization. Auth tokens are usually stored as cookies on the device for a set amount of time. They are stored with the authorization level to restrict access based on the user's role.

## WebSockets:
Client and server create a peer to peer connection where they can both update eachother. Connections are only 1 to 1 so the server has to facilitate conversations between a group of clients. Have each client connect to the server and then the server pushes updates to the clients. Use the syntax: const socket = new WebSocket('ws://localhost:9900'); to create the socket. To handle events: socket.onmessge = (event) => { console.log('recieved: ', event.data); };. To send data use: socket.send('message');
