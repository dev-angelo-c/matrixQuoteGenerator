const matrixQuoteGenerator = () => {
  const dict = [
    "I don’t know the future. I didn’t come here to tell you how this is going to end. I came here to tell you how it’s going to begin.”",
    "I don’t like the idea that I’m not in control of my life.”",
    "I’m going to show them a world without you. A world without rules and controls, without borders or boundaries. A world where anything is possible. Where we go from there is a choice a leave to you.”",
    "Choice. The problem is choice.”",
    "Because I choose to.”",
    "Guns. Lots of guns.”",
    "That is why it’s going to work.”",
    "Hiya, fellas!”",
    "If I were you, I would hope we don’t meet again.”",
    "You cannot stop him. But I can.”",
    "You ever have that feeling where you’re not sure if you’re awake or still dreaming?”",
    "”I have dreamed a dream. But now, that dream is gone from me.”",
    "You take the blue pill — the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill — you stay in Wonderland, and I show you how deep the rabbit-hole goes.”",
    "Remember, all I’m offering is the truth. Nothing more.”",
    "I’ve seen an Agent punch through a concrete wall. Men have emptied entire clips at them and hit nothing but air. Yet, their strength and speed are still based in a world built on rules. Because of that, they will never be as strong or as fast as you can be.”",
    "Neo, sooner or later, you’re going to realize – just as I did – there’s a difference between knowing the path and walking the path.”",
    "I remember that I am here not because of the path that lies before me, but because of the path that lies behind me.”",
    "I don’t know what he can do to save us. But I do know that as long as there is a single breath left in his body, he will not give up, and neither can we.”",
    "What you know, you can’t explain. But you feel it.”",
    "What happened, happened, and couldn’t have happened any other way.”",
    "You have to understand; most people are not ready to be unplugged.”",
    "Throughout human history, we have been dependent on machines to survive. Fate, it seems, is not without a sense of irony.”",
    "What Was Said Was For You, And You Alone.”",
    "We are still here!”",
    "I’m trying to free your mind, Neo. But I can only show you the door. You’re the one that has to walk through it.”",
    "Hello, Mr. Anderson.”",
    "You hear that, Mr. Anderson? That is the sound of inevitability!”",
    "We’re not here because we’re free. We’re here because we’re not free.”",
    "Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment. But you humans do not. You move to an area, and you multiply and multiply until every natural resource is consumed. The only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern — a virus. Human beings are a disease. A cancer of this planet. You are a plague, and we are the cure.”",
    "Go ahead. Shoot. The best thing about me – is there are so many me’s!”",
    "There’s no escaping reason. No denying purpose. Because, as we both know, without purpose, we would not exist.”",
    "Because of you, I’m no longer an agent of this system. Because of you, I’ve changed. I’m unplugged. A new man, so to speak. Like you, apparently free.”",
    "The purpose of life is to end.”",
    "Is it freedom, or truth? Perhaps peace? Could it be for love? Illusions, Mr. Anderson. Vagaries of perception.”",
    "I’m gonna enjoy killing you.”",
    "You can’t be dead. You can’t be because I love you. You hear me? I love you.”",
    "Touch me, and that hand will never touch anything again.”",
    "If you tell me we’ll make it, I’ll believe you.”",
    "I wished I had one more chance to say what really mattered. To say how much I loved you. How grateful I was for every moment I was with you.”",
    "Dodge this.”",
    "Everything that has a beginning has an end. I see the end coming. I see the darkness spreading. I see death. And you are all that stands in his way.”",
    "Tonight, the future of both worlds will be in your hands… or in his.”",
    "And, don’t worry about the vase.”",
    "You didn’t come here to make a choice. You’ve already made it. You’re here to try to understand why you made it.”",
    "What do all men with power want? More power.”",
    "I expect just what I’ve always expected: for you to make up your own damn mind. Believe me or don’t.”",
    "Hope. It is the quintessential human delusion, simultaneously the source of your greatest strength and your greatest weakness.”",
    "You are here because Zion is about to be destroyed. It’s every living inhabitant terminated, its entire existence eradicated.”",
    "Denial is the most predictable of all human responses.”",
    "She is going to die, and there is nothing you can do to stop it.”",
    "What do you think I am? Human?”",
    "We are all victims of causality. I drank too much wine; I must take a piss. Cause and effect.”",
    "It is remarkable how similar the pattern of love is to the pattern of insanity.”",
    "How about I give you the finger, and you give me my phone call.”",
    "I know Kung-Fu!”",
    "Doesn’t get much more obvious than that.”",
    "That you are a slave. Like everyone else, you were born into bondage, born into a prison that you cannot smell, or taste, or touch. A prison for your mind.”",
    "How do you define real? If you’re talking about what you can feel, what you can smell, taste, and see, then “real” is simply – electrical signals interpreted by your brain.”",
    "Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?”",
    "There is no spoon.”",
    "A déjà vu is usually a glitch in the Matrix. It happens when they change something.”",
    "When the Matrix was first built, there was a man born inside who had the ability to change whatever he wanted, to remake the Matrix as he saw fit. It was he who freed the first of us, taught us the truth – As long as the Matrix exists, the human race will never be free. After he died, the Oracle prophesied his return and that his coming would hail the destruction of the Matrix, end the war, bring freedom to our people. That is why there are those who have spent our entire lives searching the Matrix looking for him.\n\n– Morpheus",
    "I have not been invited. Maybe that will make me write another play. I wish them well. I hope it’s great,”\n\n– Laurence Fishburne on him not returning for ‘The Matrix Resurrections’"
  ]
	const youHaveBeenChoosen = Math.floor(Math.random() * dict.length-1) 
  return dict[youHaveBeenChoosen]
}

console.log(matrixQuoteGenerator())