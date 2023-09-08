const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img src={person.image ? person.image.medium : '/notFound.png'} />
          </div>
          <div>
            {person.name} | {character.name}
            {Boolean(voice) && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cast;