export const name = 'voiceStateUpdate';
export function execute(oldState, newState, client) {

  if (oldState.channelId === null && newState.channelId !== null) {
    // User joined a voice channel
    console.log(`${newState.member.user.tag} joined ${newState.channel.name}`);

  } else if (oldState.channelId !== null && newState.channelId === null) {
    // User left a voice channel
    console.log(`${newState.member.user.tag} left ${oldState.channel.name}`);

  } else if (oldState.channelId !== null && newState.channelId !== null) {
    // User switched voice channels
    console.log(`${newState.member.user.tag} switched from ${oldState.channel.name} to ${newState.channel.name}`);

  }
}