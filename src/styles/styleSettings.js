import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginTop: 5,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    color: '#ccc',
    fontSize: 13,
  },
  logoutButton: {
    backgroundColor: '#A259FF',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 120,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});