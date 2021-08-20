"use strict";

(function(global, document, $) {

  function RecipeOrganizer() {

    this.ingredients = [];
    this.wetIngredients = [];
    this.dryIngredients = [];
    this.instructions = [];
    var context = this;

    this.createStandardTemplate = function(parent, divCol, desCol, oneCol) {

      // Container that holds the everything including ingredients and steps
      const container = document.createElement("div");
      container.className = "container";
      parent.appendChild(container);

      const requirements = this.generateTemplate(divCol, desCol);

      // Ingredient box
      const ingredientBox = document.createElement("div");
      ingredientBox.className = "ingredientBox";
      ingredientBox.style.backgroundColor = oneCol;
      requirements.appendChild(ingredientBox);

      // Ingredients
      const ingredients = document.createElement("div");
      ingredients.className = "ingredients";
      const ingredientsTitle = document.createElement("span");
      ingredientsTitle.className = "ingredientsTitle";
      ingredientsTitle.innerHTML = "Ingredients: ";
      ingredients.appendChild(ingredientsTitle);
      const ingredientList = document.createElement("ul");
      ingredients.appendChild(ingredientList);
      ingredientBox.appendChild(ingredients);
    }

    // Similar template as the standard, but with ingredients split up
    this.createDessertTemplate = function(parent, divCol, desCol, oneCol, twoCol) {

      // Container that holds the everything including ingredients and steps
      const container = document.createElement("div");
      container.className = "container";
      parent.appendChild(container);

      const requirements = this.generateTemplate(divCol, desCol);

      //Ingredient box 1
      const ingredientBoxOne = document.createElement("div");
      ingredientBoxOne.className = "ingredientBoxOne";
      ingredientBoxOne.style.backgroundColor = oneCol;
      requirements.appendChild(ingredientBoxOne);

      // Ingredients 1
      const ingredientsOne = document.createElement("div");
      ingredientsOne.className = "ingredientsOne";
      const ingredientsTitleOne = document.createElement("span");
      ingredientsTitleOne.className = "ingredientsTitle";
      ingredientsTitleOne.innerHTML = "Wet Ingredients: ";
      ingredientsOne.appendChild(ingredientsTitleOne);
      const ingredientListOne = document.createElement("ul");
      ingredientsOne.appendChild(ingredientListOne);
      ingredientBoxOne.appendChild(ingredientsOne);

      //Ingredient box 2
      const ingredientBoxTwo = document.createElement("div");
      ingredientBoxTwo.className = "ingredientBoxTwo";
      ingredientBoxTwo.style.backgroundColor = twoCol;
      requirements.appendChild(ingredientBoxTwo);

      // Ingredients 2
      const ingredientsTwo = document.createElement("div");
      ingredientsTwo.className = "ingredientsTwo";
      const ingredientsTitleTwo = document.createElement("span");
      ingredientsTitleTwo.className = "ingredientsTitle";
      ingredientsTitleTwo.innerHTML = "Dry Ingredients: ";
      ingredientsTwo.appendChild(ingredientsTitleTwo);
      const ingredientListTwo = document.createElement("ul");
      ingredientsTwo.appendChild(ingredientListTwo);
      ingredientBoxTwo.appendChild(ingredientsTwo);
    }

    this.addIngredient = function(box, ingredient, volume, measurement,
                                                           flag = false) {

      const ingredientItem = document.createElement("li");
      const ingredientContainer = document.createElement("div");
      ingredientContainer.className = "ingredientContainer";
      const x = document.createElement("span");
      x.className = "x";
      const ingredientInfo = document.createElement("span");
      ingredientInfo.className = "ingredientInfo";
      ingredientInfo.innerHTML = volume + measurement + " of " + ingredient;
      if (flag) {
        x.innerHTML = "✔"
        x.style = "color: green";
        ingredientInfo.style = "color: green";
      } else {
        x.innerHTML = "✘";
        x.style = "color: red";
        ingredientInfo.style = "color: red";
      }
      ingredientContainer.appendChild(x);
      ingredientContainer.appendChild(ingredientInfo);
      ingredientContainer.addEventListener("click", this.changeColourHelper);
      ingredientItem.appendChild(ingredientContainer);


      if (box == "normal") {
        $(".ingredients:last ul").append(ingredientItem); // using jQuery
        this.ingredients.push({ingredient : ingredient,
                                  volume : volume,
                                  measurement: measurement,
                                  checked: false
                                  });
      }
      else if (box == "wet") {
        $(".ingredientsOne:last ul").append(ingredientItem); // using jQuery
        this.wetIngredients.push({ingredient : ingredient,
                                  volume : volume,
                                  measurement: measurement,
                                  checked: false
                                  });
      } else if (box == "dry") {
        $(".ingredientsTwo:last ul").append(ingredientItem); // using jQuery
        this.dryIngredients.push({ingredient : ingredient,
                                  volume : volume,
                                  measurement: measurement,
                                  checked: false
                                  });
      }

    }

    // Helper to change colour when clicked
    this.changeColourHelper = function() {

      if (this.childNodes[0].innerHTML == "✘") {
        this.childNodes[0].innerHTML = "✔";
        this.childNodes[0].style.color = "green";
        this.childNodes[1].style.color = "green";
      } else {
        this.childNodes[0].innerHTML = "✘";
        this.childNodes[0].style.color = "red";
        this.childNodes[1].style.color = "red";
      }
    }

    // Helper to generate template
    this.generateTemplate = function(divCol, desCol) {

      // Holds picture, description, ingredients, etc.
      const requirements = document.createElement("div");
      requirements.className = "infoPane";
      requirements.style.backgroundColor = divCol;
      $(".container:last").append(requirements); // using jQuery

      // Description box
      const descriptionBox = document.createElement("div");
      descriptionBox.className = "descriptionBox";
      descriptionBox.style.backgroundColor = desCol;
      requirements.appendChild(descriptionBox);

      // Description
      const description = document.createElement("div");
      description.className = "description";
      const descriptionTitle = document.createElement("span");
      descriptionTitle.className = "descriptionTitle";
      descriptionTitle.innerHTML = "Description: ";
      description.appendChild(descriptionTitle);
      descriptionBox.appendChild(description);

      return requirements;
    }

    // Volume drop down menu helper function
    this.volumeDropDown = function() {
      const volumeForm = document.createElement("div");
      volumeForm.className = "volumeForm";
      const volumeLabel = document.createElement("label");
      volumeLabel.className = "volumeLabel";
      volumeLabel.for = "volumes";
      volumeLabel.innerHTML = "Volume: ";
      volumeForm.appendChild(volumeLabel);
      const volumeSelect = document.createElement("select");
      volumeSelect.className = "volumeSelect";
      volumeSelect.name = "volumes";
      volumeLabel.appendChild(volumeSelect);
      const selectOne = document.createElement("option");
      selectOne.selected = "true";
      selectOne.disabled = "disabled";
      selectOne.innerHTML = "Select";
      volumeSelect.appendChild(selectOne);
      const optionML = document.createElement("option");
      optionML.value = "ml";
      optionML.innerHTML = "ml";
      volumeSelect.appendChild(optionML);
      const optionMg = document.createElement("option");
      optionMg.value = "mg";
      optionMg.innerHTML = "mg";
      volumeSelect.appendChild(optionMg);
      const optionOz = document.createElement("option");
      optionOz.value = "oz";
      optionOz.innerHTML = "oz";
      volumeSelect.appendChild(optionOz);
      const optionCup = document.createElement("option");
      optionCup.value = "cup";
      optionCup.innerHTML = "cup";
      volumeSelect.appendChild(optionCup);
      $(".infoPane:last").append(volumeForm); // using jQuery

      volumeSelect.onchange = function() {
        selectedVolume(volumeSelect.value);
      }
    }

    function selectedVolume(measurement) {

      if ($(".ingredientBox:last").length) { // using jQuery

        var listItem = $(".ingredients:last ul li"); // using jQuery
        for (var i = listItem.length - 1; i >= 0; i--) {
          if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
            context.ingredients[i].checked = false;
            listItem[i].remove();
          } else {
            context.ingredients[i].checked = true;
            listItem[i].remove();
          }
        }
        convertVolume(this, context.ingredients, "normal");

      } else {
        var listItem = $(".ingredientsOne:last ul li"); // using jQuery
        for (var i = listItem.length - 1; i >= 0; i--) {
          if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
            context.wetIngredients[i].checked = false;
            listItem[i].remove();
          } else {
            context.wetIngredients[i].checked = true;
            listItem[i].remove();
          }
        }
        convertVolume(measurement, context.wetIngredients, "wet");

        var listItem = $(".ingredientsTwo:last ul li"); // using jQuery
        for (var i = listItem.length - 1; i >= 0; i--) {
          if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
            context.dryIngredients[i].checked = false;
            listItem[i].remove();
          } else {
            context.dryIngredients[i].checked = true;
            listItem[i].remove();
          }
        }
        convertVolume(measurement, context.dryIngredients, "dry");
      }


    }

    // Helper function to convert volume
    function convertVolume(measurement, list, type) {

      for (var i = 0; i < list.length; i++) {
         var current = list[i]
         if (current.measurement.toLowerCase() == "ml" && measurement
                                               == "mg") {
           current.volume = Math.round((current.volume * 1000
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "mg";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "ml"
                                    && measurement == "oz") {
           current.volume = Math.round((current.volume * 0.033814
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "oz";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "ml"
                                    && measurement == "cup") {
           current.volume = Math.round((current.volume / 237
                          + Number.EPSILON) * 10000) / 10000;;
           current.measurement = "cup";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "mg"
                                    && measurement == "ml") {
           current.volume = Math.round((current.volume / 1000
                          + Number.EPSILON) * 10000) / 10000;;
           current.measurement = "ml";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "mg"
                                    && measurement == "oz") {
           current.volume = Math.round((current.volume * 0.000035274
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "oz";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "mg"
                                    && measurement == "cup") {
           current.volume = Math.round((current.volume / 236588
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "cup";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "oz"
                                    && measurement == "mg") {
           current.volume = Math.round((current.volume / 0.000035274
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "mg";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "oz"
                                    && measurement == "ml") {
           current.volume = Math.round((current.volume / 0.033814
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "ml";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "oz"
                                    && measurement == "cup") {
           current.volume = Math.round((current.volume / 8
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "cup";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "cup"
                                    && measurement == "oz") {
           current.volume = Math.round((current.volume * 8
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "oz";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "cup"
                                    && measurement == "mg") {
           current.volume = Math.round((current.volume * 236588
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "mg";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else if (current.measurement.toLowerCase() == "cup"
                                    && measurement == "ml") {
           current.volume = Math.round((current.volume * 237
                          + Number.EPSILON) * 10000) / 10000;
           current.measurement = "ml";
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         } else {
           context.addIngredient(type, current.ingredient, current.volume,
                                       current.measurement, current.checked);
           list.pop();
         }
      }
    }

    // Helper function to scale ingredients
    this.scaleIngredientVolume = function() {
      const scaleForm = document.createElement("div");
      scaleForm.className = "scaleForm";
      const scaleLabel = document.createElement("label");
      scaleLabel.className = "volumeLabel";
      scaleLabel.for = "volumes";
      scaleLabel.innerHTML = "Scale volume to: ";
      scaleForm.appendChild(scaleLabel);
      const volumeInput = document.createElement("input");
      volumeInput.className = "textBox";
      volumeInput.type = "number";
      volumeInput.min = "0";
      scaleLabel.appendChild(volumeInput);
      const scaleSelect = document.createElement("select");
      scaleSelect.className = "scaleSelect";
      scaleSelect.name = "volumes";
      const selectOne = document.createElement("option");
      selectOne.selected = "true";
      selectOne.disabled = "disabled";
      selectOne.innerHTML = "Select";
      scaleSelect.appendChild(selectOne);
      scaleLabel.appendChild(scaleSelect);
      $(".infoPane:last").append(scaleForm); // using jQuery

      volumeInput.oninput = function() {
        scaleHandler(scaleSelect.value, volumeInput.value);
      }

      scaleSelect.onchange = function() {
        scaleHandler(scaleSelect.value, volumeInput.value);
      }
    }
    function scaleHandler(selected, volume) {
      if (selected != "Select" && volume != 0) {

        if ($(".ingredientBox:last").length) { // using jQuery
          const getElement = context.ingredients.find(item =>
                                                 item.ingredient == selected);
          const scaleFactor = volume / getElement.volume;

          var listItem = $(".ingredients:last ul li"); // using jQuery
          for (var i = listItem.length - 1; i >= 0; i--) {
            if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
              context.ingredients[i].checked = false;
              listItem[i].remove();
            } else {
              context.ingredients[i].checked = true;
              listItem[i].remove();
            }
          }
          const list = context.ingredients;
          for (var i = 0; i < list.length; i++) {
            list[i].volume = list[i].volume * scaleFactor;
            context.addIngredient("normal", list[i].ingredient,
                    list[i].volume, list[i].measurement,
                    list[i].checked);
            list.pop();
          }

        } else {
          const getElement = context.wetIngredients.find(item =>
                                                 item.ingredient == selected);

          if (getElement !== undefined) {
            const scaleFactor = volume / getElement.volume;
            scaleAllVolumes(scaleFactor);

          }

          const getElementTwo = context.dryIngredients.find(item =>
                                                 item.ingredient == selected);
          if (getElementTwo !== undefined) {
            const scaleFactorTwo = volume / getElementTwo.volume;

            scaleAllVolumes(scaleFactorTwo);

          }
        }
      }

    }

    function scaleAllVolumes(scaleFactor) {
      var listItem = $(".ingredientsOne:last ul li"); // using jQuery
      for (var i = listItem.length - 1; i >= 0; i--) {
        if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
          context.wetIngredients[i].checked = false;
          listItem[i].remove();
        } else {
          context.wetIngredients[i].checked = true;
          listItem[i].remove();
        }
      }

      var listItem = $(".ingredientsTwo:last ul li"); // using jQuery
      for (var i = listItem.length - 1; i >= 0; i--) {
        if (listItem[i].childNodes[0].childNodes[0].style.color == "red") {
          context.dryIngredients[i].checked = false;
          listItem[i].remove();
        } else {
          context.dryIngredients[i].checked = true;
          listItem[i].remove();
        }
      }
      const list = context.wetIngredients;
      for (var i = 0; i < list.length; i++) {
        list[i].volume = list[i].volume * scaleFactor;
        context.addIngredient("wet", list[i].ingredient,
                list[i].volume, list[i].measurement,
                list[i].checked);
        list.pop();
      }
      const listTwo = context.dryIngredients;
      for (var i = 0; i < listTwo.length; i++) {
        listTwo[i].volume = listTwo[i].volume * scaleFactor;
        context.addIngredient("dry", listTwo[i].ingredient,
                listTwo[i].volume, listTwo[i].measurement,
                listTwo[i].checked);
        listTwo.pop();
      }
    }

  }

  RecipeOrganizer.prototype = {

    makeTitle: function(title) {

      const getReq = $(".infoPane:last"); // using jQuery

      const titleElement = document.createElement("span");
      titleElement.className = "title";
      titleElement.innerHTML = title;
      getReq.append(titleElement);
    },

    addDescription: function(description) {

      const getDescription = $(".description:last"); // using jQuery

      const text = document.createElement("span");
      text.className = "descriptionText";
      text.innerHTML = description;
      getDescription.append(text);
    },

    addImage: function(url) {

      // Shift the description box over
      const getR = $(".descriptionBox:last"); // using jQuery
      $(getR).css("width", "470px"); // using jQuery
      $(getR).css("left", "180px"); // using jQuery

      const image = document.createElement("img");
      image.className = "largeImage";
      image.src = url;
      $(".infoPane:last").append(image); // using jQuery
    },

    addInstructions: function(tranCol, instCol) {

      // Transition from info to instructions
      const transition = document.createElement("div");
      transition.className = "transition";
      transition.style.backgroundColor = tranCol;

      transition.style.top = $(".infoPane:last").height() + 55 + "px"; // using jQuery
      $(".container:last").append(transition); // using jQuery

      // Step-by-step template
      const instructions = document.createElement("div");
      instructions.className = "instructions";
      instructions.style.backgroundColor = instCol;
      instructions.style.top = $(".infoPane:last").height() + // using jQuery
                   $(".transition:last").height() + 55 + "px"; // using jQuery
      const instructionsTitle = document.createElement("span");
      instructionsTitle.className = "instructionsTitle";
      instructionsTitle.innerText = "Instructions:"
      instructions.appendChild(instructionsTitle);
      const stepContainter = document.createElement("ul");
      stepContainter.className = "stepContainter";
      instructions.appendChild(stepContainter);
      $(".container:last").append(instructions); // using jQuery
    },

    addSteps: function(s, stepCol) {
      const steps = document.createElement("li");
      steps.className = "steps";
      steps.style.backgroundColor = stepCol;
      const text = document.createElement("span");
      text.className = "textStep";
      text.innerHTML = s;
      steps.appendChild(text);
      $(".instructions:last ul").append(steps); // using jQuery
      $(".instructions:last").css("height", $(".instructions:last").height() + 110); // using jQuery
    },

    expandDescriptionBox: function(pixels) {
      $(".infoPane:last").css("height", $(".infoPane:last").height() + pixels); // using jQuery

      if ($(".scaleForm:last").length) { // using jQuery
        $(".scaleForm:last").css("top", $(".scaleForm:last").position().top + pixels); // using jQuery
      }

      if ($(".volumeForm:last").length) { // using jQuery
        $(".volumeForm:last").css("top", $(".volumeForm:last").position().top + pixels); // using jQuery
      }

      if ($(".ingredientBox:last").length) { // using jQuery
        $(".ingredientBox:last").css("top", $(".ingredientBox:last") // using jQuery
                           .position().top + pixels);
      } else {
        $(".ingredientBoxOne:last").css("top", $(".ingredientBoxOne:last") // using jQuery
                              .position().top + pixels);
        $(".ingredientBoxTwo:last").css("top", $(".ingredientBoxTwo:last") // using jQuery
                              .position().top + pixels);
      }

      $(".descriptionBox:last").css("height", $(".descriptionBox:last") // using jQuery
                          .height() + pixels);
    },

    expandIngredients: function(pixels) {
      $(".infoPane:last").css("height", $(".infoPane:last").height() + pixels); // using jQuery

      if ($(".scaleForm:last").length) { // using jQuery
        $(".scaleForm:last").css("top", $(".scaleForm:last").position().top + pixels); // using jQuery
      }

      if ($(".volumeForm:last").length) { // using jQuery
        $(".volumeForm:last").css("top", $(".volumeForm:last").position().top + pixels); // using jQuery
      }

      if ($(".ingredientBox:last").length) { // using jQuery
        $(".ingredientBox:last").css("height", $(".ingredientBox:last") // using jQuery
                           .height() + pixels);
      } else {
        $(".ingredientBoxOne:last").css("height", $(".ingredientBoxOne:last") // using jQuery
                              .height() + pixels);
        $(".ingredientBoxTwo:last").css("height", $(".ingredientBoxTwo:last") // using jQuery
                              .height() + pixels);

      }

    },

    addVolume: function() {

      // Volume drop down selector
      this.volumeDropDown();


      // Get scale form and shift it over if it exists. Else shift ingredients
      if (!$(".scaleForm:last").length) { // using jQuery
        $($(".scaleForm:last")).css("left", "50px"); // using jQuery

      }
      if ($(".ingredientBoxOne:last").length) { // using jQuery
        $(".volumeForm:last").css("top", $(".ingredientBoxOne:last").height() + 195 + "px"); // using jQuery
      } else {
        $(".volumeForm:last").css("top", $(".ingredientBox:last").height() + 195 + "px"); // using jQuery
      }

    },

    addScale: function() {

      // Scale ingredients
      this.scaleIngredientVolume();


      // If volume is also removed, shift ingredients down
      if ($(".ingredientBoxOne:last").length) { // using jQuery
        $(".scaleForm:last").css("top", $(".ingredientBoxOne:last").height() + 195 + "px"); // using jQuery

        for (var i = 0; i < this.dryIngredients.length; i++) {
          const newOption = document.createElement("option");
          newOption.value = this.dryIngredients[i].ingredient;
          newOption.innerHTML = this.dryIngredients[i].ingredient;
          $(".scaleSelect:last").append(newOption); // using jQuery
        }

        for (var i = 0; i < this.wetIngredients.length; i++) {
          const newOption = document.createElement("option");
          newOption.value = this.wetIngredients[i].ingredient;
          newOption.innerHTML = this.wetIngredients[i].ingredient;
          $(".scaleSelect:last").append(newOption); // using jQuery
        }

      } else {
        $(".scaleForm:last").css("top", $(".ingredientBox:last").height() + 195 + "px"); // using jQuery

        for (var i = 0; i < this.ingredients.length; i++) {
          const newOption = document.createElement("option");
          newOption.value = this.ingredients[i].ingredient;
          newOption.innerHTML = this.ingredients[i].ingredient;
          $(".scaleSelect:last").append(newOption); // using jQuery
        }
      }
    },

    removeShadow: function() {

      $(".descriptionBox:last").css("box-shadow", "none"); // using jQuery

      if ($(".ingredientBox:last").length) { // using jQuery
        $(".ingredientBox:last").css("box-shadow", "none"); // using jQuery
      } else {
        $(".ingredientBoxOne:last").css("box-shadow", "none"); // using jQuery
        $(".ingredientBoxTwo:last").css("box-shadow", "none"); // using jQuery
      }

      if ($(".steps").length) { // using jQuery
        $(".steps").css("box-shadow", "none"); // using jQuery
      }
    },

    removeOutline: function() {
      $(".largeImage:last").css("border", "none"); // using jQuery
      $(".infoPane:last").css("border", "none"); // using jQuery

      if ($(".instructions").length) { // using jQuery
        $(".instructions").css("border", "none"); // using jQuery
      }
    },
  }

  global.RecipeOrganizer = global.RecipeOrganizer || RecipeOrganizer

})(window, window.document, $);
