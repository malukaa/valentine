const checkbox = document.querySelector("#checkbox");
const score = document.querySelector("#score");
const submitBtn = document.querySelector("#submit");
const selectAllBtn = document.querySelector("#select");
const message = document.querySelector("#msg");
const after = document.querySelector("#after");
const before = document.querySelector("#before");
const gif = document.querySelector("#gif");

//i see you lurking, its lowkey goofy back here don't mind it
after.style.display = 'none';

//super long 1000 word array in one line because i wrote it out in notes first
const titles = ["I love our height difference (I’m the tall one still)", "I love your elegant frame", "I love your beauty, inside and out", "I love your sweet lovely pretty eyes", "I love your playful death glares", "I love how your eyebrows furrow in concentration", "I love how you brush your fingers through your hair", "I love your little “hm”s", "I love your “woah there buckaroo I’m calling bs” face, you haven’t seen it but it’s golden", "I love the way you hold yourself", "I love the way you look back at me in orchestra, like I’m the only person there", "I love kissing you, so much emotion in those soft moments", "I love how you hug me and we melt into each other every time we end up in a room alone", "I love the way you run your fingers through my hair", "I love listening to your heartbeat", "I love laying my head on your shoulder", "I love going to all you can eat buffets with you", "I love the way we always hold hands in the car", "I love playing and singing along to goofy playlists in the car with you ", "I love that we can do anything together", "I love sitting in tinnitus row with you", "I love conspiring with you on anything, from fun gameplans to complicated coups (the violas, etc etc etc)", "I love playing roblox with you (yk I had to add at least one roblox reference)", "I love McDonald’s runs with you (any errands ANYTHING)", "I love the actual runs we used to go on (and I HATE running, I just liked talking to you)", "I love our late night debriefs, and talking to you after a long day, missing out sleep is so worth it with you", "I love listening to you softly fall asleep on call", "I love your goodnight routine with me, always an “I love you Kaavya”", "I love your voice impressions when you tell stories (Mr. Fisher voice on point)", "I love your passwords", "I love you more than I love red 40", "I love how you made those keychains and rolled with whatever was happening", "I love your unmatchably massive aura", "I love your dedication toward your many crafts", "I love your little shenanigans and hobbies, so many things hidden within one brilliant human being", "I love how talented you are at EVERYTHING", "I love your hilarious one liners", "I love your humor, not a day goes by that I don’t crack up around you", "I love your laugh, the way you light up entirely with it", "I love how you talk about literal calculus like an excited kid, I feel so warm every time I see it", "I love how you are so full of love", "I love the way you express love", "I love that you feel like a romcom and a lovesong at every turn", "I love how mesmerizing you are", "I love your intelligence and maturity", "I love how kind you are, “it takes strength to be gentle and kind”", "I love your resilience and strength, through everything", "I love how incredibly thoughtful you are", "I love how much you truly care about others", "I love your willingness and readiness to help absolutely anyone when they need it", "I love how you bring people in and make them feel truly comfortable and welcomed", "I love how observant you are of everything", "I love how you listen to things all the way through before saying anything or jumping to conclusions", "I love how trustworthy and safe you are, I don’t have to pretend around you", "I love the way you truly live", "I love your authenticity, something I admire the most about people, and that is also the rarest in them", "I love how unique you are, truly a brilliant, once in a lifetime, person", "I love how whimsical you are, I wish I could spend 5 minutes in your mind", "I love the fact that you are a walking art form, poetry in motion", "I love love love your writing so so much", "I love how you update me about the smallest things, my favorite little texts to get", "I love the way you text, so dynamic and fun and ofc all lowercase (I had to correctly capitalize for this one)", "I love when you heart my messages and I get the lil validation sound", "I love your lil bits of encouragement before any event, managing to make me feel better in even the toughest of times", "I love that you remind me of laufey songs", "I love that you don’t give up on me when I’m going through it", "I love that you do the right thing even when it’s hard, and that you motivate me to do the same", "I love that you hate when I say sorry undeservedly", "I love how unreal you make this feel", "I love that I can be CHEESY cheesy around you (case in point)", "I love the gentleness with which you treat me", "I love that if I have an opp, you consider them an opp too (united in dislike)", "I love the amazing advice you give", "I love the immeasurable joy you have brought to my life", "I love every story you tell, such an incredible storyteller and writer", "I love that you inspire me to create, bring me things I haven’t felt in so long", "I love that silence is comfortable around you, I am hardly ever happy to be silent, but it’s different with you", "I love how you remind me of the best in people, in humanity, even in situations impossible to, to never assume where people are coming from", "I love that you feel like home", "I love that you know what to focus on most in life, the people, always", "I love that you are such a pure and genuine soul", "I love how you light up every room you walk into", "I love how magical you make everything", "I love the hope for the future you have brought me", "I love how we just clicked", "I love how you hold me", "I love how alive you make me feel", "I love the way our relationship has changed and evolved over time", "I love our silly goofy /ij s", "I love how we can switch between lighthearted goofy convo to #deep convo", "I love how quick time passes with you because I’m having an amazing time, I just wish it would last longer", "I love how I miss you even if we’ve just hung out", "You’re hot and jacked (sorry)", "I love how you inhabit my heart", "I love the way I couldn’t help falling in love with you", "I love how I feel like I’ve known you for decades and more, lifetimes ", "I love being in love with you", "I love all of you so so much", "I love that you’re my love, my baby", "I love how words will never be enough to encapsulate all that you are"];
const list = document.getElementById("checkbox");

titles.forEach((title, index) => {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.id = `checkbox-${index + 1}`;

    label.htmlFor = box.id;
    label.appendChild(box);
    label.appendChild(document.createTextNode(`${title}`));

    listItem.appendChild(label);
    list.appendChild(listItem);
        });

//submit button yeass queen
submitBtn.addEventListener("click", function(){
    after.style.display = 'flex';
    before.style.display = 'none';
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    score.textContent = checkedBoxes;
    score.style.color = "red";
    if (checkedBoxes < 3){
        message.textContent = "Heyyy, EVERYTHING on the list is true, reload the page and take it again >:(";
        gif.style.display = 'none';
    } else {
        message.textContent = "YAY YOU CHECKED THEM ALL. I LOVE YOU :D"
    }
});

selectAllBtn.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = [...checkboxes].every(checkbox => checkbox.checked);
    checkboxes.forEach(checkbox => checkbox.checked = !allChecked);
});

