//const messageCreate = require("../guild/messageCreate");
const oldSong1 = 'https://www.youtube.com/watch?v=kMzlN9-Db1A';
const oldSong2 = 'https://www.youtube.com/watch?v=F2EmooQ1Iag';
const oldSong3 = 'https://www.youtube.com/watch?v=hUwCSXMC-4s';
const taiwanese = 'https://www.youtube.com/watch?v=JJ_Otuu5-Oo';
const vie= 'https://www.youtube.com/watch?v=9foKesji-Os';

const chetBaker = 'https://www.youtube.com/watch?v=Ic-3mudz8TA';
const cag = 'https://www.youtube.com/watch?v=BpwDFKFkpOY';
const memoriesLover = 'https://www.youtube.com/watch?v=iJzJ7d5CK4A';
const moonBeautiful = 'https://www.youtube.com/watch?v=8AvUSCz_zj0';
const sleepRomance = 'https://www.youtube.com/watch?v=G2WA8jb7m14';
const claire ='https://www.youtube.com/watch?v=oiJj9GQGKsg';


const tron = 'https://www.youtube.com/watch?v=mFErBk9HtZE';
const cagrhye = 'https://www.youtube.com/watch?v=npgiuricgv4';
const adoy = 'https://www.youtube.com/watch?v=3vrcoQTvAEw';
const longChill = 'https://www.youtube.com/watch?v=uR3aQOgzyDU';
const lamp = 'https://www.youtube.com/watch?v=-ILcH66zGcY&t=905s';
const lee1='https://www.youtube.com/watch?v=HIV3huSNmwo';

const interstellar = 'https://www.youtube.com/watch?v=cU0Wz1ez3J0';
const astronaut = 'https://www.youtube.com/watch?v=NRwoqT6JBRA';

const rina = 'https://www.youtube.com/watch?v=A2urtFRvOak';
const boringstories = 'https://www.youtube.com/watch?v=7p0B2MD11QI';
const johnLee ='https://www.youtube.com/watch?v=fiuA1hZrDtU&t=2902s';
const pokepiano = 'https://www.youtube.com/watch?v=rd83jMTERqM&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=12&t=62s';
const lpda = 'https://www.youtube.com/watch?v=6cOssODvLfk';

const osrs = 'https://www.youtube.com/watch?v=uOhv43F-F6M&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=2&t=2364s';
const tes = 'https://www.youtube.com/watch?v=yQGtOrJ3j-I&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=4&t=1627s';
const relPokemon = 'https://www.youtube.com/watch?v=-BKfhq_TtcE&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=5&t=2248s';
const unova = 'https://www.youtube.com/watch?v=8TM-n90qKS8&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=7';
const hoenn = 'https://www.youtube.com/watch?v=I_S-yzGP36s&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=6&t=72s';
const dpp = 'https://www.youtube.com/watch?v=9pnhfRN9x4Q&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=8&t=15s';
const hgss = 'https://www.youtube.com/watch?v=VToyayJ4u2k&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=10&t=152s';
const bw = 'https://www.youtube.com/watch?v=2T9YM2sDmMA&list=PL-NPTX2RY0yZasQnCif9f2l_vix-X-1KU&index=11&t=21s';
const undertale = 'https://www.youtube.com/watch?v=vV7A_bD8Kgo';

const mayerSob = 'https://www.youtube.com/watch?v=CAAO6-sLvHE';
const contiunuum = 'https://www.youtube.com/watch?v=d2bmuBV2XDI';
const prince = 'https://www.youtube.com/watch?v=tTwyVNnfjzU';
const bbking = 'https://www.youtube.com/watch?v=ydzGfZBdqvo';
const srv = 'https://www.youtube.com/watch?v=fAPo0EMfdLw';
const compBlue = 'https://www.youtube.com/watch?v=bt0XdyBgSnE';


const mayerChill = [[mayerSob], [contiunuum],[prince], [bbking], [johnLee], [srv], [compBlue]];
const aysanChill = [[oldSong1], [oldSong2], [oldSong3], [vie], [taiwanese]];
const sad = [[chetBaker], [cag], [memoriesLover], [moonBeautiful], [sleepRomance], [taiwanese], [claire], [lee1]];
const chill = [[lamp], [tron], [longChill], [cagrhye], [adoy], [chetBaker], [lee1]];
const simaSleep = [[rina], [boringstories], [moonBeautiful], [sleepRomance], [johnLee], [pokepiano], [lpda]];
const sleep = [ [cag], [moonBeautiful], [sleepRomance], [interstellar], [astronaut]];
const rafiStudy = [[interstellar], [astronaut], [osrs], [tes], [relPokemon], [unova], [hoenn], [dpp], [hgss], [bw], [undertale]];


module.exports = (client, Discord, interaction) => {
  console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction: ${interaction}`);
  //console.log(interaction);
  //console.log(message);

  async function handleCommand() {
    if (interaction.isCommand()) {
      const slashcmd = client.slashcommands.get(interaction.commandName);
      //console.log(interaction);
      //console.log(slashcmd);
      if (!slashcmd) return;

      try {
        await interaction.deferReply();
        await slashcmd.run({
          client,
          interaction,
        });
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command.",
          ephemeral: true,
        });
      }
    } else if (interaction.isSelectMenu()) {
      if (interaction.customId === "choose-song") {
        switch (interaction.values[0]) {
          case "Sweet dreams!":
            switch (interaction.user.id) {
              case process.env.sima:
                {
                  //add dark academia to queue
                  //skip current song
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = simaSleep[Math.floor(Math.random() * simaSleep.length)];
                    commandPlay
                      .execute(client, interaction, "play", simaSleep, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
  
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              case process.env.simaAlt:
                //same thing lol
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = simaSleep[Math.floor(Math.random() * simaSleep.length)];
                    commandPlay
                      .execute(client, interaction, "play", simaSleep, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
  
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              default:
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = sleep[Math.floor(Math.random() * sleep.length)];
                    commandPlay
                      .execute(client, interaction, "play", sleep, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
  
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
            }
            //users i guess
            break;
          case "Goodluck!":
            switch (interaction.user.id) {
              case process.env.rafiAlt:
                {

                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = rafiStudy[Math.floor(Math.random() * rafiStudy.length)];
                    
                    commandPlay
                      .execute(client, interaction, "play", rafiStudy, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
  
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
              break;
              case process.env.rafi:
                //same thing lol
                {

                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = rafiStudy[Math.floor(Math.random() * rafiStudy.length)];
                    commandPlay
                      .execute(client, interaction, "play", rafiStudy, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
  
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              default: //dark academia
              {
                //add dark academia to queue
                //skip current song
                try {
                  const commandPlay = client.commands.get("play");
                  const song = ["dark", "academia"];
                  commandPlay
                    .execute(client, interaction, "play", song, Discord, 1)
                    .then(
                      function () {
                        commandPlay.execute(
                          client, interaction, "skip", [], Discord, 1);
                      },
                      function () {
                        console.log("Error.");
                      },
                    );

                  //await interaction.deferReply();
                } catch (error) {
                  console.error(error);
                  await interaction.reply({
                    content: "There was an error while executing this command.",
                    ephemeral: true,
                  });
                }
              }
            }
            break;
          case "Hope you feel better :)":
            {
              try {
                const commandPlay = client.commands.get("play");
                //const song = sad[Math.floor(Math.random() * sad.length)];
                commandPlay
                  .execute(client, interaction, "play", sad, Discord, 1)
                  .then(
                    function () {
                      commandPlay.execute(
                        client, interaction, "skip", [], Discord, 1);
                    },
                    function () {
                      console.log("Error.");
                    },
                  );

                //await interaction.deferReply();
              } catch (error) {
                console.error(error);
                await interaction.reply({
                  content: "There was an error while executing this command.",
                  ephemeral: true,
                });
              }
            }
            //users
            break;
          case "Enjoy!":
            switch (interaction.user.id) {
              case process.env.aysan: //process.env.rafiAlt for test
                //la vie en rose idk dude same stuff
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = aysanChill[Math.floor(Math.random() * aysanChill.length)];
                    commandPlay
                      .execute(client, interaction, "play", aysanChill, Discord, 1) //could be 3 and then do mod 2 to also obtain a 1
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
    
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              case process.env.ard:
                //ynw or that rapper idk, more rappers i guess slav music
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    const song = [['ynw', 'melly']];
                    commandPlay
                      .execute(client, interaction, "play", song, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
    
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              case process.env.mayer:
                //continuum, sob rock, bb king cos he has to, srv, prince, computer blue
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = mayerChill[Math.floor(Math.random() * mayerChill.length)];
                    commandPlay
                      .execute(client, interaction, "play", mayerChill, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
    
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
              default:
                //my chill music hehe
                {
                  try {
                    const commandPlay = client.commands.get("play");
                    //const song = chill[Math.floor(Math.random() * chill.length)];
                    commandPlay
                      .execute(client, interaction, "play", chill, Discord, 1)
                      .then(
                        function () {
                          commandPlay.execute(
                            client, interaction, "skip", [], Discord, 1);
                        },
                        function () {
                          console.log("Error.");
                        },
                      );
    
                    //await interaction.deferReply();
                  } catch (error) {
                    console.error(error);
                    await interaction.reply({
                      content: "There was an error while executing this command.",
                      ephemeral: true,
                    });
                  }
                }
                break;
            }
            break;
          default: //none left, just break.
            //users
            break;
        }
      }
    }
  }
  handleCommand();
};
