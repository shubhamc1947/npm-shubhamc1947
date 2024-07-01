import { createSpinner } from 'nanospinner';
import colors from 'colors';
import link from 'terminal-link';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkill(languages, header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);
 
    let output = `${header}`.green + ' - ';
    languages.forEach((language, index) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}

export async function main() {
    console.log(`
( ͡° ͜ʖ ͡°) 

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta);
    
    console.log()
    const spinner = createSpinner('Loading Shubham\'s details').start();
    
    async function spinnerStart() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    await spinnerStart();
    
    spinner.success();
   
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow);

    console.log();
    
    const githubLink = link('GitHub Profile -> ', 'https://github.com/shubhamc1947');
    const linkedinLink = link('LinkedIn Profile -> ', 'https://www.linkedin.com/in/shubhamchat03/');
    console.log(`NAME    `.green + ' - ' + 'Shubham Chaturvedi'.cyan);
    console.log(`STATUS  `.green + ' - ' + 'Full Stack Developer'.cyan);
    console.log(`GITHUB  `.green + ' - ' + `${githubLink}`.cyan);
    console.log(`LINKEDIN`.green + ' - ' + `${linkedinLink}`.cyan);

    console.log();
    
    console.log(`
    
█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀ █▀
█▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄ ▄█`.yellow);

    console.log();
    
    printSkill(['Java', 'C', 'Python', 'JavaScript'], 'LANGUAGES   ');
    printSkill(['React', 'Framer Motion','Express', 'Node.js', 'WebSocket', 'WebRTC', 'Firebase'], 'TECHNOLOGIES');
    printSkill(['MongoDb', 'MYSQL', 'SQL'], 'DATABASES   ');
    printSkill(['GIT', 'Github'], 'Tools       ');

    console.log(`
    
█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.yellow);

    console.log();
    
    console.log('I am right now learning WEB RTC and trying to create something awesome Everyday.'.magenta);
    console.log('I am open to exciting opportunities! Thanks for checking out my CLI!'.magenta);
    console.log();
}

main();
