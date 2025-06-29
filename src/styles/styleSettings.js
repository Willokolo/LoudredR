import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  icon: {
    marginRight: 15,
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