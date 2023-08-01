class PIL2Stage {
    constructor(id, challenges) {
        this.id = id;
        this.challenges = challenges || [];
    }

    get numChallenges() {
        return this.challenges.length;
    }

    addChallenge(challenge) {
        this.challenges.push(challenge);
    }

    toJson() {
        return this.challenges.length;
    }
}

module.exports = PIL2Stage;
