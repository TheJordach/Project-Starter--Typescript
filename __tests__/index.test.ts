describe('Console Log Test', () => {
    it('should log "Hello World 🚀"', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        require('../src'); // Adjust the path to your actual file
        expect(consoleSpy).toHaveBeenCalledWith('Hello World 🚀');
        expect(consoleSpy).toHaveBeenCalledWith('If you can read this on your terminal your project is up and running 🤘');
        consoleSpy.mockRestore();
    });
});