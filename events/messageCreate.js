const { countChannelId } = require('../config.json');

module.exports = {
    name: 'messageCreate',
    execute(message, client) {
        if(message.author.bot) return;
        
        // Counting channel automod
        if(message.channel.id === countChannelId) {            
            message.channel.messages.fetch({ limit: 2 }).then(messages => {
                if (Number.parseInt(messages.at(1).content) + 1 !== Number.parseInt(messages.at(0).content)) {
                    message.delete();
                    console.log(`Deleted message from ${message.author.username} in counting channel`);
                }
            });
        }
    },
};