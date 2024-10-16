export type Persona= {
    name: string;
    gender: string;
    age: string;
    occupation: string;
    location: string;
    bio: string;
    goals: string;
    painpoints: string;
    motivation: string;
    preferences: string;
  }
  
  export function parsePersona(aiResponse: string): Persona {
    const lines = aiResponse.split('\n');
    const persona: Partial<Persona> = {};
  
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
  
      switch (key.trim().toUpperCase()) {
        case 'NAME':
          persona.name = value;
          break;
        case 'GENDER':
          persona.gender = value;
          break;
        case 'AGE':
          persona.age = value;
          break;
        case 'OCCUPATION':
          persona.occupation = value;
          break;
        case 'LOCATION':
          persona.location = value;
          break;
        case 'BIO':
          persona.bio = value;
          break;
        case 'GOALS':
          persona.goals = value;
          break;
        case 'PAINPOINTS':
          persona.painpoints = value;
          break;
        case 'MOTIVATION':
          persona.motivation = value;
          break;
        case 'PREFERENCES':
          persona.preferences = value;
          break;
      }
    });
  
    return persona as Persona;
  }