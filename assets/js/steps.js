class Steps {
    static currentStep = 1;
    static totalSteps = document.querySelectorAll('.step').length;
    static steps = document.querySelectorAll('.step');

    static hideAllSteps() {
        this.steps.forEach(step => {
            step.classList.add('hidden');
        });
    }

    static showCurrentStep() {
        this.steps[this.currentStep - 1].classList.remove('hidden');
    }

    static goToNextStep() {
        if (this.currentStep < this.totalSteps) {
            this.steps[this.currentStep - 1].classList.add('hidden');
            this.currentStep++;
            this.showCurrentStep();
        }
    }

    static goToPrevStep() {
        if (this.currentStep > 1) {
            this.steps[this.currentStep - 1].classList.add('hidden');
            this.currentStep--;
            this.showCurrentStep();
        }
    }

    static getCurrentStep() {
        return this.currentStep;
    }
}