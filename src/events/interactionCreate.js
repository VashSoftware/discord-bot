export const name = 'interactionCreate';
export async function execute(interaction, client) {
  // Log interaction to console
  if (interaction.type === 'APPLICATION_COMMAND') {
    console.log(`${interaction.user.username} (${interaction.guild.name}) sent a command interaction: ${interaction.commandName}`);
  }

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command)
    return;

  try {
    console.log(`${interaction.user.username} (${interaction.guild.name}) executed a command: ${interaction.commandName}`);
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
}