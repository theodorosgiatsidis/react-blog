import React, { useState } from "react";

export const StoreContext = React.createContext({
  posts: [],
  addPost: () => {},
});

export const StoreContextProvider = (props) => {
  const addPost = (post) => {
    setState({ ...state, posts: [...state.posts, post] });
  };

  let posts = [
    {
      id: "1",
      title: "AEK",
      description:
        "Η Α.Ε.Κ. είναι ελληνικό ποδοσφαιρικό σωματείο που ιδρύθηκε το 1924 ως τμήμα του ιστορικού συλλόγου «Αθλητική Ένωσις Κωνσταντινουπόλεως». Οι Έλληνες της Κωνσταντινούπολης δημιούργησαν πολλούς αθλητικούς συλλόγους στην περιοχή για όλα τα αθλήματα, αλλά κυρίως για το ποδόσφαιρο. Το 1875 δημιουργήθηκε ο Ερμής στην περιοχή Γαλατά και στην ευρύτερη περιοχή που ονομάζεται σήμερα Μπέγιογλου, με στόχο την ανάδειξη Ελλήνων αθλητών και τη διατήρηση της ελληνικής ιδεολογίας. Ο Αθλητικός και Πολιτιστικός Σύλλογος Ερμής αποτέλεσε τον αρχαιότερο ποδοσφαιρικό σύλλογο που ιδρύθηκε στην τουρκική επικράτεια.[1]",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/3/3b/AEK_Athens_FC_%28logo%29.svg/200px-AEK_Athens_FC_%28logo%29.svg.png",
      user: {
        id: 2345,
        name: "Jon Doe",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "2",
      title: "PAOK",
      description:
        "Ο ΠΑΟΚ είναι ελληνικός επαγγελματικός ποδοσφαιρικός σύλλογος που εδρεύει στη Θεσσαλονίκη και ένας από τους μεγαλύτερους στην Ελλάδα. Ιδρύθηκε το 1926[2] ως το ποδοσφαιρικό τμήμα του Πανθεσσαλονίκειου Αθλητικού Ομίλου Κωνσταντινουπολιτών (ΠΑΟΚ). Ο ΠΑΟΚ συμμετέχει σε όλα τα πρωταθλήματα Α΄ Εθνικής από την ίδρυση της κατηγορίας την περίοδο 1959–60. Έχει κατακτήσει τρεις φορές το πρωτάθλημα Ελλάδας, το 1976, το 1985 και το 2019 καθώς και οκτώ φορές το κύπελλο Ελλάδας, το 1972, 1974, 2001, 2003, 2017, 2018, 2019 και 2021 ενώ έχει συμμετάσχει και σε 13 ακόμη τελικούς της διοργάνωσης. Στο ενεργητικό του έχει επίσης αρκετές αξιομνημόνευτες πορείες και νίκες στις ευρωπαϊκές διοργανώσεις.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/5/52/PAOK_FC_%282013_logo%29.png",
      commentsCount: 34,
      user: {
        id: 2346,
        name: "Kevin Mac",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "3",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "4",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "5",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "6",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "7",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "8",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
    {
      id: "9",
      title: "PANATHINAIKOS",
      description:
        "Ο Παναθηναϊκός (επίσημα Π.Α.Ε. Παναθηναϊκός Α.Ο.) είναι ελληνικός επαγγελματικός σύλλογος ποδοσφαίρου με έτος ίδρυσης το 1908.[1] Παρ' ότι αποτελεί πλέον τμήμα του Παναθηναϊκού Αθλητικού Ομίλου (ΠΑΟ), πρόκειται για ένα από τα αρχαιότερα εν ενεργεία αμιγώς ποδοσφαιρικά σωματεία της χώρας, δηλαδή από όσα ιδρύθηκαν με αποκλειστικό αντικείμενο το συγκεκριμένο άθλημα.",
      image:
        "https://upload.wikimedia.org/wikipedia/el/thumb/5/56/Panathinaikos_FC_logo.svg/200px-Panathinaikos_FC_logo.svg.png",
      commentsCount: 34,
      user: {
        id: 2347,
        name: "Will Smith",
        picture: "https://picsum.photos/200/300",
        date: "Aug 02/2020",
      },
    },
  ];

  const dammyPosts = Array.from({ length: 100 }).map((post, index) => ({
    id: String(index + 100),
    title: "AEK",
    description:
      "Η Α.Ε.Κ. είναι ελληνικό ποδοσφαιρικό σωματείο που ιδρύθηκε το 1924 ως τμήμα του ιστορικού συλλόγου «Αθλητική Ένωσις Κωνσταντινουπόλεως». Οι Έλληνες της Κωνσταντινούπολης δημιούργησαν πολλούς αθλητικούς συλλόγους στην περιοχή για όλα τα αθλήματα, αλλά κυρίως για το ποδόσφαιρο. Το 1875 δημιουργήθηκε ο Ερμής στην περιοχή Γαλατά και στην ευρύτερη περιοχή που ονομάζεται σήμερα Μπέγιογλου, με στόχο την ανάδειξη Ελλήνων αθλητών και τη διατήρηση της ελληνικής ιδεολογίας. Ο Αθλητικός και Πολιτιστικός Σύλλογος Ερμής αποτέλεσε τον αρχαιότερο ποδοσφαιρικό σύλλογο που ιδρύθηκε στην τουρκική επικράτεια.[1]",
    image:
      "https://upload.wikimedia.org/wikipedia/el/thumb/3/3b/AEK_Athens_FC_%28logo%29.svg/200px-AEK_Athens_FC_%28logo%29.svg.png",
    user: {
      id: 2345,
      name: "Jon Doe",
      picture: "https://picsum.photos/200/300",
      date: "Aug 02/2020",
    },
  }));

  posts = posts.concat(dammyPosts);
  const initState = {
    posts,
    addPost,
  };

  const [state, setState] = useState(initState);

  return (
    <StoreContext.Provider value={state}>
      {props.children}
    </StoreContext.Provider>
  );
};
