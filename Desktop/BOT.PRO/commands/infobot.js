module.exports = {
    name: "infobot",
    description: "Wysyła informacje o bocie",

    run(msg) {
        
        const{ channel } = msg
        const embed = new RichEmbed()

    .setTitle("INFO O BOCIE")
    .setDescription("BOTA STWORZYŁ DUDEKSIKORSKI#7302. WERSJA BOTA TO v1.2")
    .setColor(0xFF7F00)

    msg.channel.send(embed)
    msg.delete()
    }
}