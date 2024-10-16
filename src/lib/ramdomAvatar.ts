export function avatarGenerator(gender: string | undefined): string {
    const avatars = {
        male: ["/male01.png", "/male02.png", "/male03.png"],
        female: ["/female01.png", "/female02.png", "/female03.png"]
    };

    const normalizedGender = (gender || 'male').toLowerCase();
    
    if (normalizedGender !== "male" && normalizedGender !== "female") {
        throw new Error("Invalid gender. Please specify 'male' or 'female'.");
    }

    const selectedAvatars = avatars[normalizedGender as keyof typeof avatars];
    const randomIndex = Math.floor(Math.random() * selectedAvatars.length);

    return selectedAvatars[randomIndex];
}