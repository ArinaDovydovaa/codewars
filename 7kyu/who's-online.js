// Имея на входе массив объектов, содержащих имена пользователей,
// статус и время с последней активности (в минутах),
// создать функцию, которая определит, кто находится в сети (online),
// кто отошёл (away), а кто не в сети (offline).
// Если кто-то находится в сети (online), но его последняя активность была
// более 10 минут назад, он считается отошедшим (away).

const whosOnline = (friends) => {
  const result = {
    online: [],
    offline: [],
    away: []
  };

  for (let friend of friends) {
    if (friend.status === 'online' && friend.lastActivity <= 10) {
      result.online.push(friend.username);
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      result.away.push(friend.username);
    } else if (friend.status === 'offline') {
      result.offline.push(friend.username);
    }
  }

  return result;
};

const friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}];

console.log(whosOnline(friends));
