const classes = {
    "expt": {
        "name": "Parent Tot",
        "img": "pt.png",
        "age": "6 months—2 years",
        "descrip": "Parent-Tot class is meant to encourage swimming readiness and allow parents to bond with their children through games and songs with the objectives of having fun and becoming comfortable in the water.",
        "prereq": [
            "No prerequisite class",
            "Child must be at least 6 months old"],
        "skills": [
            "Flutter kicks",
            "Water exploration",
            "Blow bubbles on the surface",
            "Submerge mouth, nose, and eyes",
            "Holding and support techniques for front float and back float"]
    },
    "expr": {
        "name": "Preschool",
        "img": "pr.png",
        "age": "3—4 years",
        "descrip": "The purpose of our Preschool 1 & 2 class is to familiarize children with the water and help them begin to develop basic aquatic skills. This class is more focused towards children who are comfortable around water without a parent for a small amount of time.",
        "prereq": [
            "No skill prerequisites",
            "Child should be at least 3 years old"],
        "skills": [
            "Blow bubbles",
            "Flutter kicks",
            "Freestyle arms",
            "Water exploration",
            "Retrieve submerged objects",
            "Assisted front and back float",
            "Assisted front and back glide",
            "Submerge mouth, nose, and eyes"]
    },
    "exl1": {
        "name": "Level 1",
        "img": "l1.png",
        "age": false,
        "descrip": "The purpose of our Level 1 class is to help children begin to gain independent aquatic skills as they are introduced to the freestyle stroke.",
        "prereq": [
            "Successful completion of Preschool 2 or child can perform skills listed for that level"],
        "skills": [
            "Bobbing",
            "Flutter kicks",
            "Blow bubbles",
            "Freestyle arms",
            "Assisted freestyle",
            "Front and back float",
            "Front and back glide",
            "Retrieve submerged objects",
            "Roll from front to back to front"]
    },
    "exl2": {
        "name": "Level 2",
        "img": "l2.png",
        "age": false,
        "descrip": "The purpose of our Level 2 class is to help children build on the basic aquatic skills learned in Level 1 and to introduce them to both elementary backstroke and backstroke.",
        "prereq": [
            "Successful completion of Level 1 or child can perform skills listed for that level"],
        "skills": [
            "Bobbing",
            "Freestyle",
            "Front and back glide",
            "Treading water arm actions",
            "Blow bubbles through nose",
            "Retrieve submerged objects",
            "Introduction to backstroke arms",
            "Front, back, jellyfish, and tuck floats",
            "Introduction to elementary backstroke",
            "Roll from front to back and back to front"]
    },
    "exl3": {
        "name": "Level 3",
        "img": "l3.png",
        "age": false,
        "descrip": "The purpose of our Level 3 class is to help children build on the aquatic skills learned in Level 2 with a focus on stroke development. In addition, children will be introduced to breaststroke, treading, and diving from seated and kneeling positions.",
        "prereq": [
            "Successful completion of Level 2 or child can perform skills listed for that level"],
        "skills": [
            "Rotary breathing",
            "Front and back glide",
            "Swim freestyle for 15 yards",
            "Retrieve submerged objects",
            "Introduction to breaststroke",
            "Survival float for 30 seconds",
            "Swim backstroke for 10 yards",
            "Treading water arm and leg actions",
            "Front, back, jellyfish, and tuck floats",
            "Roll from front to back and back to front",
            "Swim elementary backstroke for 10 yards",
            "Diving from seated and kneeling positions",
            "Push off in a streamlined position and begin kicking"]
    },
    "exl4": {
        "name": "Level 4",
        "img": "l4.png",
        "age": false,
        "descrip": "The purpose of our Level 4 class is to help children improve their proficiency in performing the swimming strokes introduced or refined in Level 3 (freestyle, elementary backstroke, backstroke, and breaststroke.) In addition, children will be introduced to treading in deep water, diving from a standing position, dolphin kick, and open turns.",
        "prereq": [
            "Successful completion of Level 3 or child can perform skills listed for that level"],
        "skills": [
            "Dolphin kick",
            "Rotary breathing",
            "Open turns on front",
            "Feet first surface dive",
            "Freestyle for 25 yards",
            "Backstroke for 15 yards",
            "Breaststroke for 15 yards",
            "Elementary backstroke for 25 yards",
            "Treading water arm and leg actions combined",
            "Diving from seated, kneeling, and standing positions",
            "Push off in a streamlined position (front and back) and begin kicking"]
    },
    "exl5": {
        "name": "Level 5",
        "img": "l5.png",
        "age": false,
        "descrip": "The purpose of our Level 5 class is to help children refine their performance of all four swimming strokes introduced in previous levels (freestyle, elementary backstroke, backstroke, and breaststroke.) In addition, children will be introduced to two new strokes—butterfly and sidestroke. Children will also learn flip turns and how to dive from the blocks and continue swimming. If all the skills for this level are met, children will be prepared to be a part of our swim team.",
        "prereq": [
            "Successful completion of Level 4 or child can perform skills listed for that level"],
        "skills": [
            "Dolphin kick",
            "Rotary breathing",
            "Freestyle for 50 yards",
            "Backstroke for 25 yards",
            "Breaststroke for 25 yards",
            "Introduction to Butterfly",
            "Introduction to Sidestroke",
            "Treading water 2 minutes",
            "Flip turns on front and back",
            "Open turns on front and back",
            "Elementary backstroke for 50 yards",
            "Shallow-angle dive and begin swimming",
            "Diving from a standing position and off the blocks",
            "Push off in a streamlined position (front and back) and begin kicking"]
    },
    "exad": {
        "name": "Adaptive",
        "img": "ad.png",
        "age": false,
        "descrip": "The purpose of the Adaptive class is to allow those with special needs to interact with a Red Cross certified instructor one-on-one in an aquatic environment.",
        "prereq": [
            "None"],
        "skills": [
            "This class will be tailored to the needs, desires, or goals of the individual."]
    },
    "expl": {
        "name": "Private Lessons",
        "img": "pl.png",
        "age": false,
        "descrip": "The purpose of Private Lessons is to allow those who need personalized interaction with a Red Cross certified instructor to learn in a one on one session or small group setting.",
        "prereq": [
            "None"],
        "skills": [
            "This class will be tailored to the needs, desires, or goals of the individual."]
    },
    "exfl": {
        "name": "Flow Lessons",
        "img": "fl.png",
        "age": false,
        "descrip": "The purpose of the Flow lessons is to allow everyone a chance to learn how to ride the FlowRider with a Flow Instructor in personalized fifty minute lessons.  The instructor will help you learn to ride both the boogie board and the flow board, learn new tricks, or just have fun!",
        "prereq": [
            'Riders must be a minimum of 42" to ride the Body Board and 52" to ride the Flow Board.',
            "Riders must have a signed waiver by someone 18 years or older."],
        "skills": [
            "Have a better understanding of how to ride the FlowRider and refine your skills."]
    },
};