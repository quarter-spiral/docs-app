function FAQsCtrl($scope, $location,$route) {

  $scope.faqFilter = "";

  $scope.faqs = [
    {
      question: 'What is Spiral Galaxy',
      showAnswer: false,
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question: 'What is Mission Kontrol',
      showAnswer: false,
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question: 'What does it cost to add my game to QS',
      showAnswer: false,
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question: 'Which platforms does QS support',
      showAnswer: false,
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question: 'How can I remove my game',
      showAnswer: false,
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];
}
FAQsCtrl.$inject = ['$scope', '$location','$route'];



function DocumentationCtrl($scope, $location,$route) {

  if ($route.current) {
    $scope.currentSection = $route.current.params.currentSection;
    $scope.templateURL = 'partials/documentation/'+$scope.currentSection+'.html';
  }

  $scope.sections = [
    {label: 'Overview', id: 'overview'},
    {label: 'Tutorial', id: '', type: 'header'},
    {label: 'Set up a game', id: 'setup'},
    {label: 'Publish to Facebook', id: 'facebook'},
    {label: 'Display player data', id: 'integration'},
    {label: 'Store and retrieve data', id: 'integration2'},
    {label: 'SDK', id: '', type: 'header'},
    {label: 'SDK overview', id: 'sdkIntro'},
    {label: 'Flash SDK', id: 'sdkFlash'},
    {label: 'HTML SDK', id: 'sdkHtml'},
    {label: 'APIs', id: '', type: 'header'},
    {label: 'API overview', id: 'apis'},
    {label: 'Player API', id: 'playerCenter'},
    {label: 'Developer API', id: 'devCenter'}
  ];

  /*
    {label: 'Datastore API', id: 'datastore'},
    {label: 'Graph API', id: 'graph'},
    {label: 'Authentification', id: 'auth'}
  */

}
DocumentationCtrl.$inject = ['$scope', '$location','$route'];
